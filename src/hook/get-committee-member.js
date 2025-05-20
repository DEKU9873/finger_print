import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCommitteeMember } from '../Redux/reportsSlice';

const GetCommitteeMember = (id) => {
const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getCommitteeMember(id));
   }, []);
 
   const { committeeMember, isLoading } = useSelector((state) => state.reports);
 
 
   return [committeeMember, isLoading];
}

export default GetCommitteeMember
