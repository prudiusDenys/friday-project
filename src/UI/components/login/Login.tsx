import React from "react";
import {
    Button,
    Checkbox,
    createStyles,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    Theme
} from "@material-ui/core";
import {useFormik} from "formik";
import {makeStyles} from "@material-ui/core/styles";

export function Login() {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            gridItem: {
                marginBottom: '20%'
            },
            formControl: {
                width: '100%'
            },
            container: {
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            formLabel: {
                margin: '10px 0 10px 0'
            },
            errMessage: {
                color: '#d82626'
            }
        }),
    )
    const styles = useStyles()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            if (!values.email) return {email: 'Email is required!'}
            if (!values.password) return {password: 'Password is required!'}
            if (values.password.length <= 6) return {password: 'Password should be more than 5 symbols'}
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
        },
    })

    return (
        <Grid container className={styles.container}>
            <Grid item xs={4} className={styles.gridItem} >
                {/*Hook useFormik gives handleSubmit function to take all form's values*/}
                <form onSubmit={formik.handleSubmit}>
                    <FormControl className={styles.formControl}>
                        <FormGroup>
                            <TextField type={'email'} label={'Email'} margin={'normal'}
                                // Get all props from email
                                       {...formik.getFieldProps('email')}
                            />
                            {/*Get an error message if email is not valid*/}
                            {formik.errors.email && <div className={styles.errMessage}>{formik.errors.email}</div>}
                            <TextField type={'password'} label={'Password'} margin={'normal'}
                                       {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password && <div className={styles.errMessage}>{formik.errors.password}</div>}
                            <FormControlLabel className={styles.formLabel} label={'Remember me'}
                                              control={
                                                  // Get all props from checkbox
                                                  // checked value must be taken from formik
                                                  <Checkbox color={'primary'} checked={formik.values.rememberMe}
                                                            {...formik.getFieldProps('rememberMe')}
                                                  />
                                              }
                            />
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Sign in</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}
