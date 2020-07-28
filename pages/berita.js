import Header from '../component/header'
import Menu from '../component/menu'
import data from '../dataset/data.json'
import Link from 'next/link'

export default function Index(){
  return (
    <div>
      <Header/>
      <hr/>
      <Menu/>
      <hr/>
      <div>
        <h2>Berita</h2>
        <h3>List</h3>
        <div>
        {data.map((data, index) => 
            <div key={index}>
                <h4><Link href={data.link}>{data.judul}</Link></h4>
                <img src={data.img} width="200px" height="200px"/>
            </div>
        )}
        </div>
      </div>
    </div>
  )
}