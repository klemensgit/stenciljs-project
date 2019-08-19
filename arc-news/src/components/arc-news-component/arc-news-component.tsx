import { Component, State, Prop, h } from '@stencil/core';
import $ from "jquery";
import 'slick-carousel';

//import * as $ from 'jquery'; // ne dela 
//import { format } from '../../utils/utils';
//declare var $ : any;

@Component({
  tag: 'arc-news-component',
  styleUrls: ['arc-news-component.scss', 'slick.css']
  //shadow: true ce odkometiramo ne dela bootstrap ker ma nek svoj stil okrog komponente
})
export class ArcNewsComponent {

  @State() title: string;
  @State() news = []; //state je spredaj zato da vsakic ko se vsebina news tabele spremeni ponovno nalozi komponenta sicer se vsebina ne prikaze vedno
  
  todos=[{taskName:'Web',isCompleted:'no'}, {taskName:'Web1',isCompleted:'no1'}];

  @Prop() apiUrl: string;
  @Prop() img: string;
  @Prop() newsDate: string;
  @Prop() newsTitle: string;
  @Prop() abstract: string;
  @Prop() link: string;

  /*private getText(): string {
    return format(this.first, this.middle, this.last);
  }*/  

  componentWillLoad() {
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        this.news = data;
        //console.log(this.news);
      });  
  }

  componentDidLoad(){
    $('.single-item').slick();
  }


  render() {

    return(
      /*<div class="row">
         {this.todos.map((todo) =>
            <div class="col-sm-12 col-md-4 col-lg-3">
              <div class="image-holder" style={{'backgroundImage': 'url({this.img})'}}></div>
              <div class="data-holder">
                <span>{this.newsdate}</span>
                <p>{todo.taskName} | {todo.isCompleted}</p>
                <h1>{this.newstitle}</h1>
                <p>{this.abstract}</p>
                <a href={this.link}>Read more</a>
              </div>
            </div> 
         )} 
      </div>*/

    <div class="container">

      <div class="single-item">
        <div>your content</div>
        <div>your content</div>
        <div>your content</div>
      </div>

      <div class="row">
         {this.news.map((todo) =>
            <div class="col-sm-12 col-md-4 col-lg-3">
             <div class="image-holder" style={{'backgroundImage': 'url('+this.img+')'}}></div>
              <div class="data-holder">
                  <span>{this.newsDate}</span>
                  <h1>{todo.title}</h1>
                  <p>{todo.content}</p>
                  <a href={this.link}>Read more</a>
              </div>
            </div> 
         )} 
      </div>
    </div>

     /* <div class="row">
      
        <div class="col-sm-12 col-md-4 col-lg-3">
          <div class="image-holder" style={{'backgroundImage': 'url('+this.img+')'}}></div>
          <div class="data-holder">
            <span>{this.aNews}</span>
            <span>{this.newsdate}</span>
            <h1>{this.newstitle}</h1>
            <p>{this.abstract}</p>
            <a href={this.link}>Read more</a>
          </div>
        </div> 
      
      </div>*/
    );
  }
}
