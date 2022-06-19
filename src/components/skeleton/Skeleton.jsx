import React from 'react'
import './skeleton.css';
const Skeleton = ({ type }) => {
    const COUNTER = 8;
    const ItemSkeleton = () => (
        <div className="postSk">
            <div className="postSkImg"></div>
            <div className="postSkInfo">
                <div className="info1 info_basic"></div>
                <div className="info2 info_basic"></div>
                <div className="info3 info_basic"></div>
                <div className="info4 info_basic"></div>
                <div className="info5 info_basic"></div>
                <div className="info6 info_basic"></div>
                <div className="info7 info_basic"></div>
            </div>
            <div className="ratingSk">
                <div className="SkItemtop">
                    <div className="text1 info_basic"></div>
                    <div className="text2 info_basic"></div>
                </div>
                <div className="SkItemBtm">
                    <div className="text3 info_basic"></div>
                    <div className="text4 info_basic"></div>
                    <div className="text5 info_basic"></div>
                </div>
            </div>
        </div>
    )

    const ReserveSkeleton = () => (
        <div className="ReSk">
            <div className="ReLeft">
                <div className="text11 info_basic"></div>
                <div className="text22 info_basic"></div>
                <div className="text33 info_basic"></div>
                <div className="text44 info_basic"></div>
            </div>
            <div className="ReRight">
                <div className="text55 info_basic"></div>
                <div className="text66 info_basic"></div>
                <div className="text77 info_basic"></div>
            </div>
        </div>
    )

    const TableSk = () => (
        <tr className='TableSk'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )

    if (type === 'item') return Array(COUNTER).fill(<ItemSkeleton />);
    if (type === 'reserve') return Array(5).fill(<ReserveSkeleton />);
    if (type === 'table') return Array(5).fill(<TableSk />)

}

export default Skeleton