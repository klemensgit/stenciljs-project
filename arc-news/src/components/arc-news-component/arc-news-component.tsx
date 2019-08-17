import { Component, State, Prop, h } from '@stencil/core';
//import { format } from '../../utils/utils';


@Component({
  tag: 'arc-news-component',
  styleUrl: 'arc-news-component.scss',
  //shadow: true ce odkometiramo ne dela bootstrap ker ma nek svoj stil okrog komponente
})
export class ArcNewsComponent {

  @State() title: string;
  todos=[{taskName:'Web',isCompleted:'no'}, {taskName:'Web1',isCompleted:'no1'}];

  @State() news = [];
 
  @Prop() img: string;
  @Prop() newsdate: string;
  @Prop() newstitle: string;
  @Prop() abstract: string;
  @Prop() link: string;

  /*private getText(): string {
    return format(this.first, this.middle, this.last);
  }*/  

  componentWillLoad() {
    fetch('http://localhost/stenciljs-testing/index.php?url=data')
      .then(response => response.json())
      .then(data => {
        this.news = data;
        //console.log(this.news);
      });
  }

  render() {

    return[
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
      <div class="row">
         {this.news.map((todo) =>
            <div class="col-sm-12 col-md-4 col-lg-3">
             <div class="image-holder" style={{'backgroundImage': 'url('+this.img+')'}}></div>
              <div class="data-holder">
                  <span>{this.newsdate}</span>
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
    ];
  }
}
