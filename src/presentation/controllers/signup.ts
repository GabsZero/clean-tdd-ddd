export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        body: new Error('Missing param: name'),
        statusCode: 400
      }
    }
  }
}
