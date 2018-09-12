import React from 'react';
import './PlazApp.css';
import './styles.css';

export class PlazApp extends React.Component{ 

	
	render(){
		return(
			<div>
				<center>
				<div className="navBar">
					<a className="active" id="publicar" onclick="">Publicar</a>
					<a className="inactive" id="buscar" onclick="">Ofertas</a>
					<a className="inactive" id="noticias" onclick="">Noticias</a>
				</div>
				<br/>
				<div class="contenido">
					<section>
						<h1>Tipo de producto a vender</h1>
						<br/>
						<label for="tipos">Tipo:</label>
						<select id="Tipo" name="tipos" disabled>
						  <option value="Verdura">Verdura</option>
						  <option value="Fruta">Fruta</option>
						  <option value="Hortaliza">Hortaliza</option>
						</select>
						<br/>
						<h1>Seleccione el producto que desea vender</h1>
						<label for="productos">Producto:</label>
						<select id="producto" name="productos" disabled>
						  <option value="Lechuga">Lechuga</option>
						  <option value="Pepino">Pepino</option>
						  <option value="Coliflorr">Coliflorr</option>
						</select>
						<br/>
						<h1>Seleccione la unidad de medida </h1>
						<label for="medidas">Unidad de medida:</label>
						<select id="medida" name="medidas" disabled>
						  <option value="kilogramo">kilogramo</option>
						  <option value="tonelada">tonelada</option>
						  <option value="libra">libra</option>
						  <option value="arroba">arroba</option>
						  <option value="bulto">bulto</option>
						  <option value="unidad">unidad</option>
						</select>
						<br/>
					</section>
					<section>
						<p>Establezca la cantidad: </p>
						<input type = "text"/>
					</section>
					<section>
						<p>Describa el producto: </p>
						<textarea type = "text"/>
					</section>
					<section>
					</section>
				</div>
				</center>
			</div>
		);
	}
}