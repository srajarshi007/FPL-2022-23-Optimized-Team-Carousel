import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";
import "./Carousel.css"
import myImage from '../../Football_field.jpg';
import bench from '../../bench.jpg';
import swap from '../../swap.jpg';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({data}) => {
    const items = data.data.map((item,idx)=>(
        <div className='carouselItem'>
            <div className='left'>
                <h1>Game Week : {item.GW}</h1>
                <h3>Captain(2x points) : {item.Captain}</h3>
                <h3>Vice Captain : {item.Vice_Captain}</h3>
                <h3>Predicted_Total_Points : {item.Predicted_Total_Points}</h3>
                <h3>Actual_Total_Points : {item.Actual_Total_Points}</h3>
                <h3>Total XI cost : {item.XI_Cost}</h3>
                <h3>Predicted_Bench_Points : {item.Predicted_Bench_Points}</h3>
                <h3>Bench_value : {item.Bench_value}</h3>
                <h3>Remaining_budget : {item.Remaining_budget}</h3>
                <h3>Played GameChip: {item.GameChip?item.GameChip:"NA"}</h3>
                <h3>GameChip Advantage Predicted: {item.GameChip_Gain?item.GameChip_Gain:"-"}</h3>
            </div>
            <div className='middle'>
                <img src={myImage} alt="My Image" />
                <div className='fwd'>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Starting_XI.FWD[0].Team + " , PredPoints = " + item.Starting_XI.FWD[0].Predicted_Points + " , Cost = " + item.Starting_XI.FWD[0].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.FWD[0].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Starting_XI.FWD[0].Name}</p>
                    </div>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Starting_XI.FWD[1].Team + " , PredPoints = " + item.Starting_XI.FWD[1].Predicted_Points + " , Cost = " + item.Starting_XI.FWD[1].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.FWD[1].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Starting_XI.FWD[1].Name}</p>
                    </div>
                </div>
                <div className='mid'>
                    <div className='upperMid'>
                        <div className='pointDiv'>
                            <Tooltip className="ToolTip" title={item.Starting_XI.MID[0].Team + " , PredPoints = " + item.Starting_XI.MID[0].Predicted_Points + " , Cost = " + item.Starting_XI.MID[0].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.MID[0].TeamCSS}></div>
                        </Tooltip>
                            <p className='playerName'>{item.Starting_XI.MID[0].Name}</p>
                        </div>
                        <div className='pointDiv'>
                            <Tooltip className="ToolTip" title={item.Starting_XI.MID[1].Team + " , PredPoints = " + item.Starting_XI.MID[1].Predicted_Points + " , Cost = " + item.Starting_XI.MID[1].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.MID[1].TeamCSS}></div>
                        </Tooltip>
                            <p className='playerName'>{item.Starting_XI.MID[1].Name}</p>
                        </div>
                        <div className='pointDiv'>
                            <Tooltip className="ToolTip" title={item.Starting_XI.MID[2].Team + " , PredPoints = " + item.Starting_XI.MID[2].Predicted_Points + " , Cost = " + item.Starting_XI.MID[2].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.MID[2].TeamCSS}></div>
                        </Tooltip>
                            <p className='playerName'>{item.Starting_XI.MID[2].Name}</p>
                        </div>
                    </div>
                    <div className='lowerMid'>
                        <div className='pointDiv'>
                            <Tooltip className="ToolTip" title={item.Starting_XI.MID[3].Team + " , PredPoints = " + item.Starting_XI.MID[3].Predicted_Points + " , Cost = " + item.Starting_XI.MID[3].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.MID[3].TeamCSS}></div>
                        </Tooltip>
                            <p className='playerName'>{item.Starting_XI.MID[3].Name}</p>
                        </div>
                        <div className='pointDiv'>
                            <Tooltip className="ToolTip" title={item.Starting_XI.MID[4].Team + " , PredPoints = " + item.Starting_XI.MID[4].Predicted_Points + " , Cost = " + item.Starting_XI.MID[4].Cost} arrow placement='top'>
                                <div className={'point ' + item.Starting_XI.MID[4].TeamCSS}></div>
                            </Tooltip>
                            <p className='playerName'>{item.Starting_XI.MID[4].Name}</p>
                        </div>
                    </div>
                    
                </div>
                <div className='def'>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Starting_XI.DEF[0].Team + " , PredPoints = " + item.Starting_XI.DEF[0].Predicted_Points + " , Cost = " + item.Starting_XI.DEF[0].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.DEF[0].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Starting_XI.DEF[0].Name}</p>
                    </div>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Starting_XI.DEF[1].Team + " , PredPoints = " + item.Starting_XI.DEF[1].Predicted_Points + " , Cost = " + item.Starting_XI.DEF[1].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.DEF[1].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Starting_XI.DEF[1].Name}</p>
                    </div>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Starting_XI.DEF[2].Team + " , PredPoints = " + item.Starting_XI.DEF[2].Predicted_Points + " , Cost = " + item.Starting_XI.DEF[2].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.DEF[2].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Starting_XI.DEF[2].Name}</p>
                    </div>
                </div>
                <div className='gk'>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Starting_XI.GK[0].Team + " , PredPoints = " + item.Starting_XI.GK[0].Predicted_Points + " , Cost = " + item.Starting_XI.GK[0].Cost} arrow placement='top'>
                            <div className={'point ' + item.Starting_XI.GK[0].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Starting_XI.GK[0].Name}</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h2>Bench</h2>
                <div className='fwd'>
                    <img src={bench} alt="My Image" />
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Bench[0].Team + " , PredPoints = " + item.Bench[0].Predicted_Points + " , Cost = " + item.Bench[0].Cost} arrow placement='top'>
                            <div className={'point ' + item.Bench[0].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Bench[0].Name}</p>
                    </div>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Bench[1].Team + " , PredPoints = " + item.Bench[1].Predicted_Points + " , Cost = " + item.Bench[1].Cost} arrow placement='top'>
                            <div className={'point ' + item.Bench[1].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Bench[1].Name}</p>
                    </div>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Bench[2].Team + " , PredPoints = " + item.Bench[2].Predicted_Points + " , Cost = " + item.Bench[2].Cost} arrow placement='top'>
                            <div className={'point ' + item.Bench[2].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Bench[2].Name}</p>
                    </div>
                    <div className='pointDiv'>
                        <Tooltip className="ToolTip" title={item.Bench[3].Team + " , PredPoints = " + item.Bench[3].Predicted_Points + " , Cost = " + item.Bench[3].Cost} arrow placement='top'>
                            <div className={'point ' + item.Bench[3].TeamCSS}></div>
                        </Tooltip>
                        <p className='playerName'>{item.Bench[3].Name}</p>
                    </div>
                </div>
                <div className='transfer'>
                    <h3>Transferred for GameWeek</h3>
                    {item.Transferred_Out ? 
                        <div className='transfers'>
                            <div className='pointDiv'>
                                <Tooltip className="ToolTip" title={item.Transferred_Out.Team + " , PredPoints = " + item.Transferred_Out.Predicted_Points + " , Cost = " + item.Transferred_Out.Cost} arrow placement='top'>
                                    <div className={'point ' + item.Transferred_Out.TeamCSS}></div>
                                </Tooltip>
                                <p className='playerName'>{item.Transferred_Out.Name}</p>
                            </div>
                            <div className='imgDiv'>
                                <img src={swap} alt="My Image" />
                            </div>
                            <div className='pointDiv'>
                                <Tooltip className="ToolTip" title={item.Transferred_In.Team + " , PredPoints = " + item.Transferred_In.Predicted_Points + " , Cost = " + item.Transferred_In.Cost} arrow placement='top'>
                                    <div className={'point ' + item.Transferred_In.TeamCSS}></div>
                                </Tooltip>
                                <p className='playerName'>{item.Transferred_In.Name}</p>
                            </div>
                        </div>
                        : "Not Available"}

                    
                </div>
            </div>
        </div>
    ));

    
    return (
    <AliceCarousel 
        autoPlay 
        autoPlayInterval = {3000}
        infinite
        mouseTracking items={items} />
  );
}

export default Carousel;

