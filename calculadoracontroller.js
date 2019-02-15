class _Operacion{
			/* Constructor es un método que utiliza esta clase para obtener los dos números */
			constructor(_numero1,_numero2){
				this.numero1 = _numero1;
				this.numero2 = _numero2;
			}
			/* Depende de lo que se escoja, va a hacer una operación */
			Sumar(){
				return this.numero1+this.numero2;
			}
			Restar(){
				return this.numero1-this.numero2;
			}
			Div(){
				return this.numero1/this.numero2;
			}
			Multi(){
				return this.numero1*this.numero2;
			}
	}

exports.sumar = function(req, res){

	let claseinstanciada = new Operacion(req.numero1,req.numero2);
	res.json(claseinstanciada.Sumar());
}
exports.sumar = function(req, res){

	let claseinstanciada = new Operacion(req.numero1,req.numero2);
	res.json(claseinstanciada.Restar());
}
exports.sumar = function(req, res){

	let claseinstanciada = new Operacion(req.numero1,req.numero2);
	res.json(claseinstanciada.Multi());
}
exports.sumar = function(req, res){

	let claseinstanciada = new Operacion(req.numero1,req.numero2);
	res.json(claseinstanciada.Div());
}
