$(() => {
  $(window).scroll(function (e) {
    if ($(window).scrollTop() >= 170) {
      $("header").addClass("sticky-menu");
    } else $("header").attr("class", "");
  });
  $(window).resize((e) => {
    console.log($(window).width());
    if ($(window).width() >= 1200) $("header nav ul").css({ display: "flex","flex-direction": "row" });
    else {
      $("header nav ul").hide();
      $("header nav ul").css({"flex-direction": "column"});
    }
  });
  $("header .toggle-btn").click((e) => {
    $("header nav ul").slideToggle();
    $(e.target).toggleClass("collapsed");
  });

  $("#results .owl-carousel").owlCarousel({
    // autoplay: true,
    loop: true,
    margin: 54,
    nav: true,
    items: 1,
  });

  if ($(window).width() < 1001) {
    $("#faq .answer").appendTo($("#faq .active"));
    $("#faq .questions .question").each((i, e) => {
      $(e).click((event) => {
        $("#faq .active").remove($("#faq .answer"));
        $("#faq .active").removeClass("active");
        $(event.currentTarget).addClass("active");
        $("#faq .answer").appendTo(event.currentTarget);
      });
    });
  }

  $("#certification .owl-carousel").owlCarousel({
    autoplay: false,
    loop: false,
    nav: true,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      1024: {
        items: 6,
      },
    },
  });
  $("#feedback .owl-carousel").owlCarousel({
    // autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  });

  let ingrids = [
    {
      id: "i1",
      name: "Using our formula!",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i2",
      name: "Collagen",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i3",
      name: "Curcuma",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i4",
      name: "Ginger",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i5",
      name: "Horse chestnuts",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i6",
      name: "Rosemary",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i7",
      name: "Chamomile",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i8",
      name: "Rosemary",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i9",
      name: "Black nightingale",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i10",
      name: "Mountain arnica",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i11",
      name: "Eucalyptus",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i12",
      name: "Lavender",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i13",
      name: "Black nightingale",
      amount: "100mg",
      imgPath: "./assets/images/product.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
    {
      id: "i14",
      name: "Eucalyptus",
      amount: "100mg",
      imgPath: "./assets/images/after.png",
      text: "Morbi ultricies dolor hendrerit in faucibus mauris volutpat suspendisse cursus. Risus vulputate sed maecenas condimentum tortor natoque gravida est. Aliquet sed arcu tortor id vestibulum egestas tortor. Natoque lacus, sit venenatis, maecenas pulvinar in diam. Eu duis enim amet aenean rhoncus porttitor. Enim lobortis facilisi eget nulla.",
    },
  ];

  ingrids.forEach((el, i) => {
    let li = `<li id="${el.id}">
        <span class="name">${i + 1}. ${el.name}</span>
        <span class="amount">${el.amount}</span>
     </li>`;
    $("#ingredients .ingredients ul").append(li);
    $($("#ingredients .ingredients ul li")[0]).attr("class", "active");
    $(`#ingredients .ingredients ul li#${el.id}`).mouseover(function (e) {
      e.preventDefault();
      $("#ingredients .ingredients ul .active").removeClass("active");
      $(e.currentTarget).addClass("active");
      $("#ingredients .details img").attr("src", el.imgPath);
      $("#ingredients .details h3").html(el.name);
      $("#ingredients .details h5").html(el.amount);
      $("#ingredients .details p").html(el.text);
    });
  });
});
