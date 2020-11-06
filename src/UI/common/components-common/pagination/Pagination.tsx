import React from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch} from "react-redux";
import {getCardsPackTC} from "../../../../BLL/reducers/cardsReducer/cardsPack-reducer";

export function PaginationBar(props: PropsType) {

    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(getCardsPackTC(props.rows, page))
    }

    return (
        <div className={'paginationBox'}>
            <Typography>Page: {props.page}</Typography>
            <Pagination count={props.totalPage} page={props.page} onChange={handleChange} />
        </div>
    )
}

type PropsType = {
    page: number
    totalPage: number
    rows: number
}