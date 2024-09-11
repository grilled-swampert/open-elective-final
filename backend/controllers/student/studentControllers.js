const Term = require("../../models/termModel/termModel");

const asyncHandler = require("express-async-handler");

// GET term details
exports.getAllTerms = asyncHandler(async (req, res) => {
    try {
      const terms = await Term.find();
      res.json(terms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// GET a single term
exports.getTerm = asyncHandler(async (req, res) => {
  const { termId } = req.params;
  try {
    const term = await Term.findById(termId);
    if (!term) return res.status(404).json({ message: "Term not found" });
    res.status(200).json(term);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
});

// GET semester details
exports.getSemesters = asyncHandler(async (req, res) => {
  const { termId } = req.params;
  try {
    console.log("Term ID: ", termId);
    const term = await Term.findById(termId).populate("semesters");
    console.log("Term: ", term);
    if (!term) return res.status(404).json({ message: "Term not found" });

    res.status(200).json(term.semesters);
  } catch (error) {
    res.status(500).json({ error: "helo" });
  }
});

// GET all students across all semesters within a term
exports.getAllStudentsInTerm = asyncHandler(async (req, res) => {
  const { termId } = req.params;

  try {
    console.log("Term ID:", termId);

    // Find the term and populate its semesters with the studentsList
    const term = await Term.findById(termId).populate({
      path: 'semesters',
      populate: {
        path: 'studentsList',
        model: 'Student',
      },
    });

    if (!term) {
      return res.status(404).json({ message: 'Term not found' });
    }

    // Collect all students across all semesters in the term
    const allStudents = term.semesters.reduce((students, semester) => {
      return students.concat(semester.studentsList);
    }, []);

    res.status(200).json(allStudents);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET students from a specific semester within a term
exports.getStudentsInSemester = asyncHandler(async (req, res) => {
  const { termId, semesterId } = req.params;

  try {
    console.log("Term ID:", termId);
    console.log("Semester ID:", semesterId);

    // Find the term and the specific semester within it
    const term = await Term.findById(termId).populate({
      path: 'semesters',
      match: { _id: semesterId }, // Match the specific semester ID
      populate: {
        path: 'studentsList',
        model: 'Student',
      },
    });

    if (!term || term.semesters.length === 0) {
      return res.status(404).json({ message: 'Semester not found in the specified term' });
    }

    // Return the students in the specified semester
    const students = term.semesters[0].studentsList;
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// GET NPTEL courses
exports.getNPTELCourses = asyncHandler(async (req, res) => {
  const { termId } = req.params;

  try {
    console.log("Term ID:", termId);

    // Find the term by ID, populate semesters, and within those semesters, populate nptelCourses
    const term = await Term.findById(termId).populate({
      path: 'semesters', // Path to the semesters in the Term model
      populate: {
        path: 'courses', // Path to the nptelCourses in each semester
        model: 'NPTEL' // Name of the model for NPTEL courses
      }
    });

    if (!term) {
      return res.status(404).json({ message: 'Term not found' });
    }

    // Collect all NPTEL courses from the populated semesters
    const allNPTELCourses = term.semesters.reduce((courses, semester) => {
      return courses.concat(semester.courses);
    })

    res.status(200).json(allNPTELCourses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch NPTEL courses', error: error.message });
  }
});



// GET Coursera courses
exports.getCourseraCourses = asyncHandler(async (req, res) => {
  const { termId } = req.params;

  try {
    console.log("Term ID:", termId);

    // Find the term by ID, populate semesters, and within those semesters, populate nptelCourses
    const term = await Term.findById(termId).populate({
      path: 'semesters', // Path to the semesters in the Term model
      populate: {
        path: 'courses', // Path to the nptelCourses in each semester
        model: 'Coursera' // Name of the model for NPTEL courses
      }
    });

    if (!term) {
      return res.status(404).json({ message: 'Term not found' });
    }

    const allCourseraCourses = term.semesters.reduce((courses, semester) => {
      return courses.concat(semester.courses);
    })

    res.status(200).json(allCourseraCourses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Coursera courses', error: error.message });
  }
});

// GET College courses
exports.getCollegeCourses = asyncHandler(async (req, res) => {
  const { termId } = req.params;

  try {
    console.log("Term ID:", termId);

    // Find the term by ID, populate semesters, and within those semesters, populate nptelCourses
    const term = await Term.findById(termId).populate({
      path: 'semesters', // Path to the semesters in the Term model
      populate: {
        path: 'courses', // Path to the nptelCourses in each semester
        model: 'College' // Name of the model for NPTEL courses
      }
    });

    if (!term) {
      return res.status(404).json({ message: 'Term not found' });
    }

    // Collect all NPTEL courses from the populated semesters
    const allCollegeCourses = term.semesters.reduce((courses, semester) => {
      return courses.concat(semester.courses);
    })

    res.status(200).json(allCollegeCourses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch College courses', error: error.message });
  }
});

// UPDATE student details
exports.updateStudentDetails = asyncHandler(async (req, res) => {
    const { termId, studentId } = req.params;
    const updateData = req.body; // This will contain the fields to be updated
  
    try {
      console.log("Term ID:", termId);
      console.log("Student ID:", studentId);
  
      // Find the term and populate its semesters with the studentsList
      const term = await Term.findById(termId).populate({
        path: 'semesters',
        populate: {
          path: 'studentsList',
          model: 'Student',
        },
      });
  
      if (!term) {
        return res.status(404).json({ message: 'Term not found' });
      }
  
      // Find the student across all semesters within the term
      let foundStudent = null;
      for (const semester of term.semesters) {
        const student = semester.studentsList.find(student => student._id.toString() === studentId);
        if (student) {
          foundStudent = student;
          break;
        }
      }
  
      if (!foundStudent) {
        return res.status(404).json({ message: 'Student not found in the specified term' });
      }
  
      // Update the student details
      Object.assign(foundStudent, updateData);
      await foundStudent.save();
  
      console.log("Updated Student:", foundStudent);
  
      res.status(200).json(foundStudent);
    } catch (error) {
      console.error("Error updating student details:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
// GET terms in which a student is enrolled
exports.getStudentTerms = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  try {
    console.log("Student ID:", studentId);

    // Find all terms and populate their semesters with the studentsList
    const terms = await Term.find().populate({
      path: 'semesters',
      populate: {
        path: 'studentsList',
        match: { _id: studentId }, // Match the studentId within the studentsList
        select: '_id name' // Select only the fields you need from the student
      }
    });

    // Filter out terms that don't have any semesters with the student
    const filteredTerms = terms.filter(term => 
      term.semesters.some(semester => semester.studentsList.length > 0)
    );

    res.status(200).json(filteredTerms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
