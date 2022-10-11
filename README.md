# POO-Javascript
[Curso Básico de Programación Orientada a Objetos con JavaScript](https://platzi.com/cursos/javascript-poo/)

## Paradigmas de programación

Los paradigmas son distintas maneras de programar, los mas comunes son:
- Estructurtado
- Orientado a objetos
- Funcional

Un paradigma <b>NO</b> es mejor que otro, depende de la situación y el contexto. Cada lenguaje puede trabajar con 1 o varios paradigmas.

# Programación Orientada a Objetos

La Programación Orientada a Objetos (POO, en español; OOP, según sus siglas en inglés) es un paradigma de programación que viene a innovar la forma de obtener resultados. Los objetos se utilizan como metáfora para emular las entidades reales del negocio a modelar.

Ventajas de utilizar POO:
- Orden
- Todo esta conectado
- Reutilización de código. (Los moldes son las clases, que usaremos para instanciar objetos)

Los objetos tienen <b>métodos</b> (funciones) y <b>atributos</b> (caracteristicas.)

## Objetos en Javascript

### Objetos Literales

Los objetos literales se distinguen de los objetos de la POO por que no son instancias de un prototipo creado por el desarrollador.

Sin embargo los objetos literales son instancias del prototipo `Object` creado por defecto en JavaScript.
```javascript
const Natalia = {
  'Name': 'Natalia',
  'Age': 20,
  'Rank': 2000,
}
```

### Prototipo

Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que se guarda los atributos y métodos que luego podrán ser heredados por sus instancias.

Podemos pensarlo como un molde de objetos.

```javascript
function Student(){
  this.name = 'Nombre';
  this.age  = '18';
  tihs.points = '2000';
}

const Juanita = new Stundent();
```

## Objeto

Los objetos son estructuras de datos formadas por métodos y atributos, los cuales herea de su prototipo padre.

De modo que los objetos son isntasncias de ese prototipo, particularmente cuando dicho prototipo fue creado por el desarrollador (en caso contrario se llaman objetos literales)

### Atributos

Dentro de los objetos se pueden guardar atributos para guardar en ellos la información que se les asocia. Así, toda información del objeto se guarda en sí mismo.

### Métodos

Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura.

### Atributo `__proto__`

Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript.

El atributo `__proto__` se hereda a partir de los prototipos por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos `Object` y `Array`.

El atributo `__proto__` también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo `Object`