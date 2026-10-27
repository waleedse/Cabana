import React, { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { api_url } from '../../../Configs/BaseUrls';
import Axios from 'axios';

export default function TopSearchSelect() {
    const [datatable, setDatatable] = React.useState([]);
    const [originaldata, setOriginaldata] = React.useState([]);
    const [sort, setSort] = React.useState(10);

    const onchangeshowselection = (value) => {

        let updatedlist = [];
        if (value != 'All') {
            if (value < originaldata.length) {

                for (var i = 0; i < value; i++) {
                    updatedlist.push(originaldata[i]);
                }

            } else {

                updatedlist = originaldata;
            }
        } else {
            updatedlist = originaldata
        }

        setDatatable(updatedlist);
    }
    useEffect(() => {
        //   Axios.post('/api/get_pamm_accounts').then(res=>{
        //       console.log(res)
        //        setOriginaldata(res.data);
        //       setDatatable(res.data).then(res=>{
        //         onchangeshowselection(20);
        //       });
        //   })
    }, [])
    return (
        <div className="container-fluid web_padding mt-5" >
            {/* <MDBDataTableV5
          hover
          entriesOptions={[20, 50, 100, 500]}
          entries={20}
          pagesAmount={4}
          data={datatable}
          pagingTop
          searchTop
          searchBottom={false}
        /> */}
            {/* <div className="card p-4 stats_card" style={{overflowX:'scroll'}}>
      <div  className="ml-auto ">
        <div >
        <div className="d-flex">
        Showing
          <select style={{border:'0px'}} onChange={(e)=>{onchangeshowselection(e.target.value)}}  >
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
            <option value='All'>All</option>

          </select>
          of {originaldata.length}
        </div>
        </div>
      </div>
      <table className=" table table-borderless px-5  table-hover mdb-dataTable">
         <thead className="mdb-dataTable-head">
          <tr >
            <th class="sorting">Nick Name</th>
            <th class="sorting">Ranking</th>
            <th class="sorting">Performance</th>
            <th class="sorting">Days Opened</th>
            <th class="sorting">Number of Investors</th>
            <th class="sorting">Manager Capital</th>
            <th class="sorting">Action</th>
          </tr>
          </thead>
          <tbody>
            {
             datatable ? datatable?.map((data,index)=>{
                return(
                        <tr>
                          <td>{data.nickname}</td>
                          <td>{data.ranking}</td>
                          <td>{data.performance}</td>
                          <td>{data.daysOpened}</td>
                          <td>{data.numberOfInvestors}</td>
                          <td>{data.managerCapital.toFixed(2)}</td>
                          <td><button onClick={()=>{window.open('/trading-memory/'+data.id,'_self')}} className="btn depositeOutlineButton ">Invest </button></td>
                          <td>{data.nickname}</td>
                        </tr>
                )
              })
              :
              null
            }
          </tbody>

      </table>
      </div> */}
            <iframe style={{ width: '100%', height: '700px', border: '0px' }} src='https://stats-social.aurummarkets.com/widgets/ratings?widgetKey=social_platform_ratings'></iframe>
        </div>
    );
}
