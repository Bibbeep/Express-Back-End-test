const Homepage = require("../models/homepage");
const HomepageValidation = require('../validations/homepage');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            HomepageValidation.queryParams(req.query);
            const homepageData = await Homepage.findMany(req.query);

            return res.status(200).json({
                status: 'Success',
                statusCode: 200,
                message: homepageData.data.length !== 0 ? 'Data homepage berhasil diambil.' : 'Tidak ada data homepage yang tersedia.',
                pagination: homepageData.pagination,
                data: homepageData.data
            });
        } catch (err) {
            next(err);
        }
    }
};