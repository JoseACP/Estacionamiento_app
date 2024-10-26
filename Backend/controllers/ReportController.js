const generateReport = (req, res) => {
    const { startDate, endDate } = req.query;
    const filteredRecords = records.filter((record) => {
       return record.entryTime >= new Date(startDate) && record.exitTime <= new Date(endDate);
    });
    res.status(200).json(filteredRecords);
 };
 
 module.exports = { generateReport };
 