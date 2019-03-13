function response(result, errors, status) {
    this.result = result;
    this.errors = errors;
    this.status = status;
    this.requestedDate = new Date();
}

module.exports = response;
