import React from 'react';

function Brokerage() {
    return ( 
        <div className='container m-6'>
            <div className='row m-5 p-5'>
                <h1 className='fs-3'>Charges for optional value added services</h1>
                <table className='border mt-5 p-5'>
                    <thead>
                        <tr style={{height:"2.5rem"}}>
                            <th>Service</th>
                            <th>Billing Frquency</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody className='border-top'>
                        <tr style={{height:"2.5rem"}}>
                            <td>Tickertape</td>
                            <td>Smallcase</td>
                            <td>Kite Connect</td>
                        </tr>
                        <tr style={{height:"2.5rem"}}>
                            <td>Monthly / Annual</td>
                            <td>Per transaction</td>
                            <td>Monthly</td>
                        </tr>
                        <tr style={{height:"2.5rem"}}>
                            <td>Free: 0 | Pro: 249/2399</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                            <td>Connect: 500 | Historical: 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Brokerage;