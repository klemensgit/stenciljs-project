import { Component, Prop, h } from '@stencil/core';
//import { format } from '../../utils/utils';


@Component({
  tag: 'arc-news-component',
  styleUrl: 'arc-news-component.scss',
  //shadow: true
})
export class ArcNewsComponent {
 
  @Prop() img: string;
  @Prop() newstitle: string;
  @Prop() abstract: string;
  @Prop() link: string;

  /*private getText(): string {
    return format(this.first, this.middle, this.last);
  }*/

  render() {

    return(
        <div>
            <img src={this.img} />
            <h1>{this.newstitle}</h1>
            <p>{this.abstract}</p>
            <a href={this.link}>Read more</a>
        </div>  
    );
  }
}
