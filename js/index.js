// service section buttons click 
const serviceImg = document.getElementById('service_img');
const serviceText = document.getElementById('service_text');
const serviceBtns = document.getElementsByClassName('service_btn');

const serviceTextArray = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis, temporibus, ex obcaecati voluptatem sint commodi fugiat sapiente, porro rerum sed unde dolor odio. Minima architectodistinctio dolorvitae culpa.',
  'Graphic symbols are often functionalist and anonymous, as these pictographs from the US National ParkService illustrate. Graphic design is the process of visual communication and problem-solving throughthe use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously. Graphic designers create and combine symbols, images and text to form visual representations of ideas and messages.',
  'Customer support is a range of customer services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, upgrading, and disposal of a product. Regarding technology products such as mobile phones, televisions, computers, software products or other electronic or mechanical goods, it is termed technical support.',
  'If you want your app to be successful, you have to consider UX to be not just a minor aspect of design, but an essential component of product strategy.There are many things to consider when designing for mobile. In this article, I’ve summarized a lot of practical recommendations that you can apply to your design.',
  'Marketing is the study and management of exchange relationships.[1][2] Marketing is used to create, keep and satisfy the customer. With the customer as the focus of its activities, it can be concluded that Marketing is one of the premier components of Business Management - the other being innovation.',
  'Search engine optimization (SEO) is the process of affecting the online visibility of a website or a web page in a web search engines unpaid results—often referred to as "natural", "organic", or "earned" results. In general, the earlier (or higher ranked on the search results page), and more frequently a website appears in the search results list, the more visitors it will receive from the search engines users.'
];

for (let i = 0; i < serviceBtns.length; i++) {
  serviceBtns[i].addEventListener('click', e => {
    serviceText.innerText = serviceTextArray[i];
    serviceImg.src = `img/services/services_${i + 1}.png`;

    for (let j = 0; j < serviceBtns.length; j++) {
      serviceBtns[j].classList.remove('service_btn_active');
    }

    serviceBtns[i].classList.add('service_btn_active');
  }) 
}


//