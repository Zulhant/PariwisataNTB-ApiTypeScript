
export interface responModel {
   code: Number,
   message: String,
   payload?: Object
}
function builResponse(code: Number, message: String, payload?: Object): responModel {
   return <responModel>{
      code: code,
      message: message,
      payload: payload
   }
}

export default class responGenerator {
   static success(payload: Object | String): responModel {
      return typeof (payload) === 'object' ? builResponse(200, 'success', payload) : builResponse(200, 'success');
   }

   static badRequest(message) {
      return builResponse(401, message)
   }

   static noPound(message) {
      return builResponse(400, message)
   }

}