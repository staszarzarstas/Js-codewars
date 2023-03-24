// function fuelPrice(litres, pricePerLitre) {
//     var fuelPrice;
//       switch (litres) {
//           case litres<2 :
//               fuelPrice = ( litres * pricePerLitre );
//             break;

//           case 2<=litres<4 :
//               fuelPrice = ( litres * (pricePerLitre - 0.05) );
//           break;  

//           case 4<=litres<6 :
//               fuelPrice = ( litres * (pricePerLitre - 0.1) );
//             break;

//           case 6<=litres<8 :
//               fuelPrice = ( litres * (pricePerLitre - 0.15) );
//             break;

//             case 8<=litres<10 :
//               fuelPrice = ( litres * (pricePerLitre - 0.2) );
//             break;  

//             case 10<=litres<12 :
//               fuelPrice = ( litres * (pricePerLitre - 0.25) );
//             break;
//             default:
//           fuelPrice = ( litres * (pricePerLitre - 0.25) );
//         }
//   }


//   function fuelPrice(litres, pricePerLitre) {

//     switch (litres) {
//         case litres<2 :
//             fuelPrice = ( litres * pricePerLitre );
//           break;

//         case litres< 4 :
//             fuelPrice = ( litres * (pricePerLitre - 0.05) );
//         break;  

//         case litres<6 :
//             fuelPrice = ( litres * (pricePerLitre - 0.1) );
//           break;

//         case litres<8 :
//             fuelPrice = ( litres * (pricePerLitre - 0.15) );
//           break;

//           case litres<10 :
//             fuelPrice = ( litres * (pricePerLitre - 0.2) );
//           break;  

//           case litres<12 :
//             fuelPrice = ( litres * (pricePerLitre - 0.25) );
//           break;
//           default:
//         fuelPrice = ( litres * (pricePerLitre - 0.25) );
//       }
// }






function fuelPrice(litres, pricePerLitre) {
    var fuelPrice;
    switch (litres) {
        case litres < 2:
            fuelPrice = (litres * pricePerLitre);
            break;

        case 2 <= litres && litres < 4:
            fuelPrice = (litres * (pricePerLitre - 0.05));
            break;

        case 4 <= litres && litres < 6:
            fuelPrice = (litres * (pricePerLitre - 0.1));
            break;

        case 6 <= litres && litres < 8:
            fuelPrice = (litres * (pricePerLitre - 0.15));
            break;

        case 8 <= litres && litres < 10:
            fuelPrice = (litres * (pricePerLitre - 0.2));
            break;

        case 10 <= litres && litres < 12:
            fuelPrice = (litres * (pricePerLitre - 0.25));
            break;
        default:
            fuelPrice = (litres * (pricePerLitre - 0.25));
    }
}









function fuelPrice(litres, pricePerLitre) {
    if (litres < 2) {
        return (litres * pricePerLitre)
    } else if (2 <= litres && litres < 4) {
        return (litres * (pricePerLitre - 0.05))
    } else if (4 <= litres && litres < 6) {
        return (litres * (pricePerLitre - 0.1))
    } else if (6 <= litres && litres < 8) {
        return (litres * (pricePerLitre - 0.15))
    } else if (8 <= litres && litres < 10) {
        return (litres * (pricePerLitre - 0.2))
    } else if (10 <= litres && litres < 12) {
        return (litres * (pricePerLitre - 0.25))
    } else {
        return (litres * (pricePerLitre - 0.25))
    }
}