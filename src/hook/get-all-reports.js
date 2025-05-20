import React, { useEffect } from 'react'
import { getAllReports } from '../Redux/reportsSlice';
import { useDispatch, useSelector } from 'react-redux';


const GetAllReports = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllReports());
  }, []);

  const { data, isLoading } = useSelector((state) => state.reports);


  return [data, isLoading];
}

export default GetAllReports
