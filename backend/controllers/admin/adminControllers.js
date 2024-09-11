const Term = require("../../models/termModel/termModel");
const Semester = require("../../models/semesterModel/semesterModel");

const asyncHandler = require("express-async-handler");

// GET all terms
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
  const { id } = req.params;
  try {
    const term = await Term.findById(id);
    if (!term) return res.status(404).json({ message: "Term not found" });
    res.status(200).json(term);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a term
exports.createTerm = asyncHandler(async (req, res) => {
  const term = new Term({
    termYear: req.body.termYear,
    termType: req.body.termType,
  });
  try {
    const newTerm = await term.save();
    res.status(201).json(newTerm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a term
exports.deleteTerm = async (req, res) => {
  const { termId } = req.params;
  try {
    const term = await Term.findByIdAndDelete(termId);
    if (!term) {
      return res.status(404).json({ message: "Term not found" });
    }
    res.status(200).json({ message: "Term deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE a term
exports.updateTerm = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const term = await Term.findByIdAndUpdate(id, req.body, { new: true });
    if (!term) return res.status(404).json({ message: "Term not found" });
    res.status(200).json(term);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------------------------------------

// DELETE a semester from a term
exports.deleteSemester = asyncHandler(async (req, res) => {
  const { termId, semesterId } = req.params;

  try {
    const term = await Term.findById(termId);
    if (!term) return res.status(404).json({ message: "Term not found" });

    term.semesters.pull(semesterId);
    await term.save();

    const deletedSemester = await Semester.findByIdAndDelete(semesterId);
    if (!deletedSemester)
      return res.status(404).json({ message: "Semester not found" });

    res.status(200).json({ message: "Semester deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE a semester in a term
exports.updateSemester = asyncHandler(async (req, res) => {
  const { termId, semesterId } = req.params;
  const { category, elective, semesterNumber } = req.body;

  console.log("termId: ", termId);
  console.log("semesterId: ", semesterId);

  try {
    // Find the term by termId and populate semesters to find the specific semester
    const term = await Term.findById(termId).populate({
      path: 'semesters',
      match: { _id: semesterId }
    });

    console.log("Semester: ", term);

    // If term or semester not found, return 404
    if (!term || term.semesters.length === 0) {
      return res
        .status(404)
        .json({ message: "Semester not found in the provided term" });
    }

    // Update the semester fields
    const semester = term.semesters[0];
    Object.keys(req.body).forEach((key) => {
      semester[key] = req.body[key];
    });

    // Save the updated semester
    const updatedSemester = await semester.save();
    res.status(200).json(updatedSemester);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: error.message });
  }
});

// GET all semesters in a term
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

// GET a single semester in a term
exports.getSemester = asyncHandler(async (req, res) => {
  const { termId, semesterId } = req.params;

  try {
    const term = await Term.findById(termId).populate({
      path: "semesters",
      match: { _id: semesterId },
    });
    if (!term || term.semesters.length === 0)
      return res.status(404).json({ message: "Semester not found" });

    res.status(200).json(term.semesters[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DOWNLOAD syllabus
exports.downloadSyllabus = async (req, res) => {
  try {
      const { id } = req.params;
      const semester = await Semester.findById(id);

      if (!semester || !semester.syllabusFile) {
          return res.status(404).json({ message: 'Syllabus file not found' });
      }

      const filePath = path.resolve(semester.syllabusFile);
      res.download(filePath, err => {
          if (err) {
              res.status(500).json({ message: 'Error downloading file', err });
          }
      });
  } catch (error) {
      res.status(500).json({ message: 'Error retrieving syllabus file', error });
  }
};

