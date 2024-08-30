
import ChartRatio from '../../Components/Box/CharatRatio/ChartRatio'
import ChartAnalytics from '../../Components/Box/ChartAnalytics/ChartAnalytics'
import ChartBox from '../../Components/Box/ChartBox/ChartBox'
import ChartProfit from '../../Components/Box/ChartProfit/ChartProfit'
import ChartRevenue from '../../Components/Box/ChartRevenue/ChartRevenue'
import ChartSource from '../../Components/Box/ChartSource/ChartSource'
import ChartVisit from '../../Components/Box/ChartVisit/ChartVisit'
import TopBox from '../../Components/Box/TopBox/TopBox'
import ChartProducts from '../../Components/Box/chartProducts/ChartProducts'
import './Home.scss'
const Home = () => {
  return (
    <div className='home_page'>
        <div className='box box1'>  <TopBox/> </div>
        <div className='box box2'> <ChartBox/></div>
        <div className='box box3'><ChartProducts/></div>
        <div className='box box4'>  <ChartSource/>    </div>
        <div className='box box5'><ChartRatio/></div>
        <div className='box box6'><ChartRevenue/></div>
        <div className='box box7'>  <ChartAnalytics/></div>
        <div className='box box8'><ChartVisit/></div>
        <div className='box box9'><ChartProfit/></div>


    </div>
  )
}

export default Home