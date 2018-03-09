import { state,trigger, transition, style, animate, query, group, keyframes } from '@angular/animations';


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


export const openMenu = trigger('openMenu', [
  state('active', style({
    left : 0
  })),
  state('inactive', style({
    left : '-100%',
  })),
  transition('inactive => active',[
    style({left : 0}),
      group([
        query('ul',style({opacity : 0})),
        query('.nav-left',[
           style({transform : 'translateY(-100%)'}),
           animate(500, keyframes([
             style({ backgroundColor: "#3ee7ad", offset: 0 }),
             style({ transform : "translateY(0)", offset: 0.5 }),
             style({ backgroundColor : "rgba(30, 30, 30, 0.9)", offset: 1 })
           ]))
        ]),
        query('.nav-right',[
         style({transform : 'translateY(+100%)'}),
         animate(500, keyframes([
           style({ backgroundColor: "#3ee7ad", offset: 0 }),
           style({ transform : "translateY(0)", offset: 0.5 }),
           style({ backgroundColor : "rgba(30, 30, 30, 0.9)", offset: 1 })
         ]))
       ]),
      ]),
      query('ul',[
        animate(500,style({
          opacity : 1
        }))
      ])
  ]),
  transition('active => inactive', animate('200ms ease-out',
      style({
        opacity: 0,
      })
    ))
]);


export const workAnimation = trigger('workAnimation', [
    transition(':enter',[
      query('.card', style({opacity : 0})),
      query('.work-wrapper',style({opacity :0})),
      query('.loading',[
        animate('1900ms',keyframes([
          style({  transform: 'translateX(-90%)', offset: 0 }),
          style({ transform: 'translateX(0)', offset: 0.4 })
        ])),
        animate('300ms',style({
            transform: 'translateX(+100%)'
      })),
      ]),
      query('.work-wrapper',animate(300,style({opacity :1}))),
      query('.card', [
        animate(300,keyframes([
          style({  opacity: '1', offset: 0 }),
          style({  transform: 'scale(0)', offset: 0 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
]);
