import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneReport } from '../Redux/reportsSlice';

const GetOneReport = (id) => {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getOneReport(id));
   }, []);
 
   const { singleReport, isLoading } = useSelector((state) => state.reports);
 
 
   return [singleReport, isLoading];
}

export default GetOneReport
