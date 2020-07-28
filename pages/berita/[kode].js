import dummyData from '../../dataset/data.json';
import Header from '../../component/header'
import Menu from '../../component/menu'

const Artikel = (props) => {
 return (
 <div className="container">
     <Header/>
     <hr/>
     <Menu/>
 <hr />
 <h1 className="title">{props.judul}</h1>
 <img src={props.img} width="300px" height="300px"/>
 <p>{props.isi}</p>
 </div>
 );
}
export async function getStaticProps(context){
    // cari artikel berdasarkan kode yang dikirim melalui URL
    // alias parameter dynamic routing
    let kode = context.params.kode;
    let data = dummyData.find(x => x.id == kode);
    // ambil judul & isi dari data hasil pencarian
    let { judul,img, isi } = data;
    return {
    props : {
    // kirim judul & isi sebagai properti ke komponen utama
    judul,img, isi
    }
    }
   }
   export async function getStaticPaths(){
    return {
    paths : [
    // deklarasikan kode 1, 2, & 3 sebagai parameter
    // dynamic routing untuk path yang harus di-pre-render
    {params : {kode : '1'}},
    {params : {kode : '2'}},
    {params : {kode : '3'}}
    ],
    fallback : false
    }
   }
export default Artikel;