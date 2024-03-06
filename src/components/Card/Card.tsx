import './Card.css';
import Button from '@mui/material/Button';

type CardProps = {
    title: string;
    subtitle: string;
    option: boolean;
}


export const Card = ({title, subtitle, option}: CardProps) => {
    const x = `container ${option && 'background-red'}`;
    return <>
        <p>Ciao</p>
        <p>Miao</p>
    </>
//     return (
//     <div className="card">
//         <img alt={title} style={{maxHeight: '30px'}} src='https://www.w3schools.com/howto/img_avatar.png'></img>
//         <div className={x}>
//         <h4><b>{title}</b></h4>
//         <p onMouseEnter={() => console.log("sono passato da qui")}>{subtitle}</p>
//         {option && <p>Some option</p>}
//         </div>
//         <Button >Contained</Button>
//         {/* <button disabled={!option}>Contattalpo</button> */}
//   </div>)
  }