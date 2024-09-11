const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mkdrip = require('mkdirp');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

// Import models
const Course = require('../../models/courseModel/courseModel');
const CollegeOffered = require('../../models/courseModel/clgModel');
const Coursera = require('../../models/courseModel/courseraModel');
const NPTEL = require('../../models/courseModel/nptelModel');
const Semester = require('../../models/semesterModel/semesterModel');
const Term = require('../../models/termModel/termModel');

mkdrip.sync('uploads/admin');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/admin');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

// Middleware to handle file uploads
exports.uploadFiles = upload.single('syllabusFile');

const sanitizeData = (data) => {
    const sanitizedData = {};
    for (let key in data) {
        if (typeof data[key] === 'string') {
            sanitizedData[key] = data[key].replace(/^'(.*)'$/, '$1').trim(); // Remove surrounding single quotes and trim
        } else {
            sanitizedData[key] = data[key];
        }
    }
    return sanitizedData;
};

const importCourses = async (file, termId, semesterId, category) => {
    const results = [];
    const filePath = file.path;

    try {
        await fs.promises.readFile(filePath, { encoding: 'utf8' });
    } catch (error) {
        throw new Error('File not found or inaccessible');
    }

    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                return reject(new Error('File not found or inaccessible'));
            }
            fs.createReadStream(filePath)
                .on('error', (err) => reject(new Error('Error reading CSV file')))
                .pipe(csv())
                .on('data', (data) => results.push(sanitizeData(data))) // Sanitize each row
                .on('end', async () => {
                    try {
                        const courseIds = [];
                        for (const row of results) {
                            let course;
                            switch (category) {
                                case 'NPTEL':
                                    course = new NPTEL({
                                        courseId: row.courseCode,
                                        discipline: row.discipline,
                                        courseName: row.courseName,
                                        institute: row.institute,
                                        duration: row.duration,
                                        startDate: new Date(row.startDate),
                                        endDate: new Date(row.endDate),
                                        examDate: new Date(row.examDate),
                                        domain: row.domain,
                                        level: row.graduateLevel,
                                        courseLink: row.courseLink
                                    });
                                    break;
                                case 'Coursera':
                                    course = new Coursera({
                                        courseId: row.courseId,
                                        courseName: row.courseName,
                                        averageHours: row.averageHours,
                                        courseraHours: row.courseraHours,
                                        difficulty: row.difficulty,
                                        university: row.university,
                                        majorDomain: row.majorDomain,
                                        domain: row.domain,
                                        courseLink: row.courseLink
                                    });
                                    break;
                                case 'College Offered':
                                    course = new CollegeOffered({
                                        offeringDepartment: row.offeringDepartment,
                                        courseID: row.courseID,
                                        courseName: row.courseName,
                                        courseLink: row.courseLink,
                                        faculty: row.faculty,
                                        emailId: row.emailId,
                                        EXCP: row.EXCP,
                                        ETRX: row.ETRX,
                                        COMP: row.COMP,
                                        IT: row.IT,
                                        AIDS: row.AIDS,
                                        MECH: row.MECH,
                                        RAI: row.RAI,
                                        CCE: row.CCE,
                                        VDT: row.VDT,
                                        CSBS: row.CSBS
                                    });
                                    break;
                                default:
                                    throw new Error('Unknown category');
                            }

                            await course.save();
                            courseIds.push(course._id);
                        }

                        resolve(courseIds);
                    } catch (error) {
                        reject(error);
                    }
                });
        });
    });
};

exports.createSemesterAndProcessCSV = asyncHandler(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No CSV file uploaded' });
    }

    const { termId } = req.params;
    const { semesterNumber, category, elective, branch, startDate, endDate, certificateSubmissionDate, broadcastMessage } = req.body;
    const file = req.file;

    try {
        let semester = await Semester.findOne({
            category,
            elective,
            semesterNumber,
        });

        if (semester) {
            Object.keys(req.body).forEach((key) => {
                semester[key] = req.body[key];
            });

            if (req.file) {
                semester.syllabusFile = req.file.path;
                const courseIds = await importCourses(req.file, termId, semester._id, semester.category);
                semester.courses = courseIds;
            }

            const term = await Term.findById(termId);
            if (!term.semesters.includes(semester._id)) {
                term.semesters.push(semester._id);
                await term.save();
            }

            const updatedSemester = await semester.save();
            res.status(200).json(updatedSemester);
        } else {
            semester = new Semester({
                semesterNumber,
                category,
                elective,
                branch,
                syllabusFile: req.file.path,
                startDate,
                endDate,
                certificateSubmissionDate,
                broadcastMessage,
                term: termId
            });

            const savedSemester = await semester.save();

            if (req.file) {
                const courseIds = await importCourses(req.file, termId, savedSemester._id, category);
                savedSemester.courses = courseIds;
                await savedSemester.save();
            }

            const term = await Term.findById(termId);

            if (!term) {
                return res.status(404).json({ message: 'Term not found' });
            }

            if (!term.semesters.includes(savedSemester._id)) {
                term.semesters.push(savedSemester._id);
                await term.save();
            }

            res.status(201).json(savedSemester);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
