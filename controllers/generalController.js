const catchAsync = require('../utils/catchAysnc');
const AppError = require('../utils/appError');

//Fonction de suppression
exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('Pas de données trouvée avect cet ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

  // Fonction de mise à jour
exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('Pas de données trouvée avect cet ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

  //Fonction de création
exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

  // Fonction obtenir un element
exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;
    if (!doc) {
      return next(new AppError('Pas de données trouvée avect cet ID', 404));
    }
    res.send(doc)
  });

