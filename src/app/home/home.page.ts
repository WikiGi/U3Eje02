import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];
  public placesFiltered = [];
  public search = '';


  constructor() {
    //consulta remota
    this.places.push({
      image: 'https://visitatepic.com/wp-content/uploads/2017/05/Cerro-san-juan.png',
      title: 'Cerro de San Juan',
      subtitle: 'Tepic',
      description: 'Asciende más de 600 metros y disfruta de una de las mejores vistas de la ciudad y del representativo Volcán Sangangüey. El ascenso toma aproximadamente 50 minutos y cuenta con 2 zonas de descanso. Durante todo el ascenso, disfrutarás de espectaculares vistas.',
      active: true
    });

    this.places.push({
      image: 'https://visitatepic.com/wp-content/uploads/2017/05/Alameda.png',
      title: 'Alameda Central',
      subtitle: 'Tepic',
      description: 'La Alameda Central de Tepic tiene una imagen renovada que te invita a acudir a descansar, hacer ejercicio o simplemente disfrutar de un tiempo con la naturaleza.',
      active: true
    });

    this.places.push({
      image: 'https://visitatepic.com/wp-content/uploads/2017/05/sta-maria-del-oro.jpg',
      title: 'Laguna de Santa María del Oro',
      subtitle: 'Santa María del Oro',
      description: 'En el cráter de un volcán de la Sierra Madre Occidental, se encuentra esta hermosa laguna de 2 km de largo por 1.6 km de ancho, cuyas aguas cambian de color dependiendo de la temporada del año y cautivan de inmediato a sus visitantes. Desde un mirador, antes de comenzar el descenso por la carretera, podrás apreciarla en todo su esplendor. Aproximadamente 7 kilómetros después, podrás recorrerla por su contorno y disfrutar de decenas de restaurantes a la orilla de este hermoso paraíso natural.',
      active: true
    });

    this.places.push({
      image: 'https://visitatepic.com/wp-content/uploads/2017/05/el-manto.jpg',
      title: 'El manto',
      subtitle: 'Amatlán de Cañas',
      description: 'Ubicado en el bello municipio de Amatlán de Cañas, al sur del estado. Este centro recreativo alrededor de un cañón con manantial termal, cuenta con cascada, restaurantes, spa y habitaciones.',
      active: true
    });

    this.places.push({
      image: 'https://visitatepic.com/wp-content/uploads/2017/05/san-blas.jpg',
      title: 'Puerto de San Blas',
      subtitle: 'San Blas',
      description: 'El histórico puerto de San Blas es un cálido lugar donde la belleza de su vegetación tropical y la tranquilidad de sus hermosas playas, van de la mano con su historia en la que se combinan ataques piratas, expediciones coloniales y gloriosos combates por la independencia de México.',
      active: true
    });

    this.places.push({
      image: 'https://visitatepic.com/wp-content/uploads/2017/05/matanchen.jpg',
      title: 'Playa y muelle de Matanchén',
      subtitle: 'San Blas',
      description: 'A tan sólo 20 minutos de Tepic, existe un lugar donde puedes dar largos paseos por la playa para gozar de bellos atardeceres y disfrutar lo mejor de la gastronomía local, como el exquisito pescado zarandeado, los camarones a la diabla o los camarones al mojo de ajo. De igual manera, recomendamos disfrutar del tradicional pan de plátano, el pan de coco, cocadas o cualquiera de las delicias preparadas de acuerdo a recetas típicas de las comunidades costeras nayaritas.',
      active: true
    });

    this.placesFiltered = this.places;
  }

  filter(): void
  {
    if (this.search.length == 0)
      this.placesFiltered = this.places;

    if (this.search && this.search.trim())
    {
      this.placesFiltered = this.places.filter((place) => 
      {
        return (place.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1 );
      });
    }
  }

  deletePlace(position: number): void {
    this.places.splice(position, 1);
    this.placesFiltered = this.places;
  }

  changeStatus(position: number) {
    this.places[position].active = !this.places[position].active;
    this.placesFiltered = this.places;
  }
}
