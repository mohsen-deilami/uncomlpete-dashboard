let xAxisData = [
    {
        "name": 'Jan-1',
        "Sale": 112_000
    },
    {
        "name": 'Feb-2',
        "Sale": 99_000
    },
    {
        "name": 'Mar-3',
        "Sale": 12_090
    },
    {
        "name": 'Apr-4',
        "Sale": 99_000
    },
    {
        "name": 'May-5',
        "Sale": 54_000
    },
    {
        "name": 'Jun-6',
        "Sale": 85_000
    },
    {
        "name": 'Jul-7',
        "Sale": 34_000
    },
    {
        "name": 'Agu-8',
        "Sale": 18_598
    },
    {
        "name": 'Sep-9',
        "Sale": 10_000
    },
    {
        "name": 'Oct-10',
        "Sale": 73_078
    },
    {
        "name": 'Nov-11',
        "Sale": 12_900
    },
    {
        "name": 'Des-12',
        "Sale": 97_000
    },
];

let xAxisDataProducts = [
    {
        "name": 'Jan-1',
        "Sale": 90000
    },
    {
        "name": 'Feb-2',
        "Sale": 2000
    },
    {
        "name": 'Mar-3',
        "Sale": 150000
    },
    
    {
        "name": 'Apr-4',
        "Sale": 180000
    }
];
let widgetSmData=[
    {id:1,image:'images/1.JPG', userName:'Mohsen Deilami', userTitle:'WebDeveloper'},
    {id:2,image:'images/2.JPG', userName:'Manida Deilami', userTitle:'Hacker'},
    {id:3,image:'images/3.JPG', userName:'Mona Omran',     userTitle:'FrontEnd'},
    {id:4,image:'images/4.JPG', userName:'Azam Deilami',   userTitle:'BackEnd'},
    {id:5,image:'images/5.JPG', userName:'Sabi Fallah',    userTitle:'FullStack'},
    {id:6,image:'images/6.JPG', userName:'Hosein Deilami', userTitle:'ReactJs'}
];
let widgetLgData=[
    {id:1,image:'images/1.JPG', costumer:'Mohsen Deilami', date:'2023-06-01' , amount:'100$' , status:'Pending'},
    {id:2,image:'images/2.JPG', costumer:'Manida Deilami', date:'2023-06-01' , amount:'150$' , status:'Approved'},
    {id:3,image:'images/3.JPG', costumer:'Mona Omran',     date:'2023-06-01' , amount:'30$' ,  status:'Decline'},
    {id:4,image:'images/4.JPG', costumer:'Azam Deilami',   date:'2023-06-01' , amount:'70$' , status:'Pending'},
    {id:5,image:'images/5.JPG', costumer:'Sabi Fallah',    date:'2023-06-01' , amount:'170$' , status:'Decline'},
    {id:6,image:'images/6.JPG', costumer:'Hosein Deilami', date:'2023-06-01' , amount:'195$' , status:'Approved'}
];
let userRow=[
    {id:'1',image:'images/1.JPG', userName:'Mohsen Deilami',eMail:'mohsendeilami@yahoo.com',transaction:'98$',status:'active'},
    {id:'2',image:'images/2.JPG', userName:'Manida Deilami',eMail:'manidadeilami@yahoo.com',transaction:'75$',status:'noneActive'},
    {id:'3',image:'images/3.JPG', userName:'Mona Omran',    eMail:'mona.omran@yahoo.com',transaction:'43$',status:'active'},
    {id:'4',image:'images/4.JPG', userName:'Azam Deilami',  eMail:'azam.deilami@gmail.com',transaction:'21$',status:'noneActive'},
    {id:'5',image:'images/5.JPG', userName:'Sabi Fallah',   eMail:'sabifallah@yahoo.com',transaction:'109$',status:'active'},
    {id:'6',image:'images/6.JPG', userName:'Hosein Deilami',eMail:'hoseindeilami@gmail.com',transaction:'68$',status:'noneActive'}
];
let productsDetails = [
    {id:'1',title:'Asus',image: '/images/asus.jpeg',details:'As720 - 2023 cpu:core i7',price:'1170$' ,sale:90_000},
    {id:'2',title:'Acer',image: '/images/acer.jpg',details:'Ac980 - 2023 cpu:core i8 ', price:'1312$' ,sale:80_000},
    {id:'3',title:'HP', image:  '/images/hp.jpg',details:'H630 - 2022 cpu:core i6',price:'1200$' ,sale:65_000},
    {id:'4',title:'Dell',image: '/images/dell.jpg',details:'Dl170 - 2023 cpu:core i3', price: '890$' ,sale:190_000},
];


export {xAxisData , widgetSmData , widgetLgData ,userRow , productsDetails , xAxisDataProducts}