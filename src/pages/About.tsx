import { useState } from "react"
import { useTranslation } from "react-i18next"
import * as Yup from 'yup'
import { Formik } from 'formik'
// material
import { CardContent, Typography } from "@mui/material"
//components
import { FloatMessage } from "@/components"
//styled components
import {
    AboutContainer, ContactUsFormContainer,
    ContactUsField, SubmitButton,
    ContactUsCard, AboutContent
} from "@/styled/pages/styledAbout"
// utils
import { ABOUT, CONTACT_US_VALIDATION } from "@/utils/translation"

const About = () => {
    const { t } = useTranslation()
    // states
    const [isAlertActive, setIsAlertActive] = useState(false)

    const initialFormValues = {
        name: '',
        email: '',
        message: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, t(CONTACT_US_VALIDATION.name.min))
            .required(t(CONTACT_US_VALIDATION.name.required)),
        email: Yup.string()
            .email(t(CONTACT_US_VALIDATION.email.invalid))
            .required(t(CONTACT_US_VALIDATION.email.required)),
        message: Yup.string()
            .required(t(CONTACT_US_VALIDATION.message.required))
            .min(10, t(CONTACT_US_VALIDATION.message.min))
    })

    const onSumbitClick = (values: typeof initialFormValues) => {
        setIsAlertActive(true)
        // DEV!!
        console.log("form values", values)
    }

    return (
        <AboutContainer>
            <AboutContent>
                {/* info content */}
                <Typography variant="h3" gutterBottom>{t(ABOUT.title)}</Typography>
                <Typography fontSize="18px" variant="body1" gutterBottom>{t(ABOUT.p1)}</Typography>
                <Typography fontSize="18px" mt={3} variant="body1" gutterBottom>{t(ABOUT.p2)}</Typography>
                {/* contact us card */}
                <ContactUsCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>{t(ABOUT.formTitle)}</Typography>
                        <Typography fontSize="18px" variant="body2" gutterBottom>{t(ABOUT.formInfo)}</Typography>
                        {/* contact us form */}
                        <Formik initialValues={initialFormValues}
                            validationSchema={validationSchema}
                            onSubmit={onSumbitClick}>
                            {({
                                handleChange,
                                handleSubmit,
                                values,
                                errors,
                                touched
                            }) => (
                                <ContactUsFormContainer component="form" onSubmit={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}>
                                    <ContactUsField
                                        name="name" variant="outlined"
                                        value={values.name} onChange={handleChange}
                                        label={t(ABOUT.namePlaceholder)}
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name} />
                                    <ContactUsField
                                        name="email" variant="outlined"
                                        value={values.email} onChange={handleChange}
                                        label={t(ABOUT.emailPlaceholder)}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email} />
                                    <ContactUsField
                                        name="message" variant="outlined" multiline
                                        value={values.message} onChange={handleChange}
                                        label={t(ABOUT.messagePlaceholder)} rows={4}
                                        error={touched.message && Boolean(errors.message)}
                                        helperText={touched.message && errors.message} />
                                    <SubmitButton type="submit" variant="contained" color="primary">
                                        {t(ABOUT.formButton)}
                                    </SubmitButton>
                                </ContactUsFormContainer>
                            )}
                        </Formik>
                    </CardContent>
                </ContactUsCard>
            </AboutContent>
            <FloatMessage message={t(CONTACT_US_VALIDATION.alert.success)} isActive={isAlertActive} setIsActive={setIsAlertActive} />
        </AboutContainer>
    )
}

export default About