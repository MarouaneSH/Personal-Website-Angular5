import { trigger, transition, style, animate, query,group } from '@angular/animations';


export const routeInAnimation = trigger('routeInAnimation',[
  transition(':enter',[
    group([
      query('.sh-wrapper',[
        style({
          transform:'translateX(-300px)',
        }),
        animate(500,style({
          transform:'translateX(0)',
        }))
      ]),
      query('.bg-image',[
        style({
          transform:'translateX(300px)',
        }),
        animate(500,style({
          transform:'translateX(0)',
        }))
      ]),
      query('.sh-content',[
        style({
          transform:'translateX(-10px)',
        }),
        animate(800,style({
          transform:'translateX(102px)',
        }))
      ])
    ]),
    query('.sh-title',[
      style({
        opacity:0
      }),
      animate(400,style({
        opacity:1
      }))
    ])
  ]),
  transition(':leave',[
    group([
      group([
        query('.sh-wrapper, .bg-image , .sh-content, .sh-title',[
          animate(200,style({
            opacity:0
          }))
        ]),
      ]),
    ])
  ])
]);
