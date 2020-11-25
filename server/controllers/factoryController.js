import catchAsync from './../errors/catchAsync.js'
import APIFeatures from './../utils/APIFeatures.js'

export const getAll = Model => catchAsync( async (req, res, next) => {
    const query = Model.find();
    const features = new APIFeatures(query, req.query)
        .search()
    
    const documents = await features.document

    res.status(200).json({
        status: 'success',
        results: documents.length,
        documents
    })
})

export const getOne = Model => catchAsync( async (req, res, next) => {
    const id = req.params.id;
    const desiredDoc = await Model.findById(id);
    if(!desiredDoc){
        return next(new AppError('id is not exist', 404));
    }

    res.status(200).json({
        status: 'success',
        document: desiredDoc
    })

})

export const createOne = Model => catchAsync( async (req, res, next) => {
    const createdDoc = await Model.create(req.body);

    res.status(201).json({
        status: 'success',
        document: createdDoc
    })
})

export const updateOne = Model => catchAsync( async (req, res, next) => {
    const id = req.params.id;
    const updatedDoc = await Model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        status: 'success',
        document: updatedDoc
    })
})

export const deleteOne = Model => catchAsync( async (req, res, next) => {
    const id = req.params.id;
    const deletedDoc = await Model.findByIdAndDelete(id);
    if(!deletedDoc) return next(new AppError('Could find any document by that id', 400));

    res.status(204).json({
        status: 'success'
    })
})