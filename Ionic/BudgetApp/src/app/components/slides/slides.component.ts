import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  itemsList = [
    {
      title: "Design logo for ASA",
      amount: "$200",
      color: "#4e4bfd"
    },
    {
      title: "Next meeting",
      amount: "$560",
      color: "#3098ff"
    },
    {
      title: "Reviw with the doctor",
      amount: "$160",
      color: "#ff725a"
    },
    {
      title: "Therapist payment",
      amount: "$420",
      color: "#f18dac"
    },
    {
      title: "Design logo for ASA",
      amount: "$200",
      color: "#ed9667"
    },
    {
      title: "Next meeting",
      amount: "$560",
      color: "#4e4bfd"
    },
    {
      title: "Reviw with the doctor",
      amount: "$160",
      color: "#3098ff"
    },
    {
      title: "Therapist payment",
      amount: "$420",
      color: "#ff725a"
    }
  ];

  slidesOptions = {
    slidesPerView: 2.4,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

  test(slide: string) {
    console.log(slide);
  }

}
