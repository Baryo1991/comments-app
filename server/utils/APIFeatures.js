class APIFeatures {
    constructor(document, query) {
        this.document = document;
        this.query = query
    }

    filter = () => {
        const copiedQuery = {...this.query}
        const excludeFields = ['sort', 'page', 'limit', 'select']
        excludeFields.forEach(field => delete copiedQuery[field]);
        let queryStr = JSON.stringify(copiedQuery);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/, match => `$${match}`);
        const queryObj = JSON.parse(queryStr);
        this.document = this.document.find(queryObj);
        return this;
    }

    search = () => {
        if(this.query.search) {
            console.log(this.query.search)
            const search = {
                email: {
                    $regex: this.query.search,
                    $options: 'i'
                }
            }
            this.document = this.document.find(search)
        }
        return this;
    }
    
}

export default APIFeatures