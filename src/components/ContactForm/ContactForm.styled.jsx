import styled from 'styled-components';

export const Form=styled('form')(()=> {
        return {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        }

        ;
    });

export const Input=styled('input')(()=> {
        return {
            padding: '6px',
            border: '1px solid #a09d9d',
            borderRadius: '5px',
            outline: 'none',

            '&:focus': {
                borderColor: '#5f96ca',
                boxShadow: '0px 0px 37px 6px rgba(34, 60, 80, 0.12)',
            }

            ,
            transition: 'all 0.2s linear',
        }

        ;
    });

export const Label=styled('label')(()=> {
        return {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        }

        ;
    });

export const AddButton=styled('button')(()=> {
        return {
            color: "white",
            padding: '6px',
            border: '1px solid #a09d9d',
            borderRadius: '5px',
            width: "120px",
            margin: "0 auto",
            outline: 'none',
            backgroundColor: '#6b62b8',
            '&:hover': {
                borderColor: 'transparent',
                backgroundColor: '#ecf4b1',
                color: "#3a438a",
                outLine: 'none',
                fontWeight: '500px',
                cursor: 'pointer',
            }

            ,

            transition: 'all 0.2s linear',
        }

        ;
    });