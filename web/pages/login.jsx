import Card from "../components/common/Card";
import { Flex } from "../components/common/containers";
import { Background, CheckIconContainer, Logo } from "../components/specific/Login/styles";
import Input from "../components/form/Input";
import Button from "../components/common/Button";

import { User, EyeClosed, Eye, CheckCircle } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Title3 } from "../components/common/text";
import { api } from "../services/apiClient";
// import { localStorageUserKey } from "../utils/constants";
// import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";

const LoginPage = () => {

    //   const { user } = useContext(UserContext)

    const router = useRouter()

    //   useEffect(() => {
    //     if (user) {
    //       console.log('user: ', user)
    //     }
    //   }, [user])

    // form values:
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(false);


    // change views:
    const [forgotPassword, setForgotPassword] = useState(false)
    const [forgotPasswordEmailSent, setForgotPasswordEmailSent] = useState(false)

    // errors:
    const [loginError, setLoginError] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState(null)




    const closeAllViews = () => {
        setForgotPassword(false)
        setForgotPasswordEmailSent(false)
    }



    const handleSendPasswordRecoveryEmail = () => {

        // const reqData = {
        //     email: username
        // }

        // api('post', '/forgot/password', reqData)
        //     .then(res => {
        //         if (res && res.data) {
        //             setForgotPasswordEmailSent(true)
        //         }
        //      })
    }



    const handleLogin = () => {
        // const reqData = {
        //     grant_type: "password",
        //     client_id: 2,
        //     client_secret: "CmBRD8aNKGSheOT3T4xnnJtht7xbvhKjgHaMmngc",
        //     username: username,
        //     password: password,
        //     scope: ""
        // }


        // api('post', '/oauth/token', reqData)
        //     .then(res => {
        //         if (res && res.data) {
        //             const userInfo = {
        //                 uuid: res.data.user.uuid,
        //                 type: res.data.user.role.type,
        //                 access_token: res.data.data.access_token,
        //                 refresh_token: res.data.data.refresh_token,
        //             }
        //             //   localStorage.setItem(localStorageUserKey, JSON.stringify(userInfo))
        //             return res.data
        //         }
        //     })
        //     .then(res => {
        //         if (res) {
        //             router.push('/')
        //         }
        //     })
        //     .catch(err => {
        //         console.log({ err })
        //         setLoginError(true)
        //         setLoginErrorMessage('Usuário ou senha incorretos')
        //     })
    }

    if (forgotPasswordEmailSent) {
        return (
            <Background>
                <Flex
                    width='100%'
                    >
                    <Card login width='489px'>
                        <Flex padding="0 16px 16px" column>
                            <CheckIconContainer>
                                <CheckCircle size={120} weight="thin" />
                            </CheckIconContainer>
                            <Title3 fontSize='24px' fontWeight='400'>
                                Confira sua caixa de entrada!
                </Title3>
                            <Parag margin='16px 36px 0'>
                                Enviamos um link para cadastramento de uma nova senha no e-mail informado.
                </Parag>
                        </Flex>
                        <Flex column margin="16px">
                            <Button
                                tertiary
                                fullWidth
                                onClick={() => {
                                    setForgotPasswordEmailSent(false)
                                    setForgotPassword(true)
                                }}
                            >
                                Tentar outro e-mail
              </Button>
                            <Button
                                fullWidth
                                onClick={() => {
                                    handleSendPasswordRecoveryEmail()
                                }}
                            >
                                Ainda não recebi
              </Button>
                        </Flex>
                    </Card>
                </Flex>
            </Background>
        )
    } else if (forgotPassword) {
        return (
            <Background>
                <Flex
                    width='100%'
                >
                    <Card login width='489px'>
                        <Flex width='100%'>
                            <Logo src='/images/Logo.png' alt='Logo' />
                        </Flex>
                        <Flex padding="0 16px 16px" column alignItems="flex-start" textAlign='left'>
                            <Flex width='100%'>
                                <Title3 fontSize='24px' fontWeight='400'>
                                    Recuperação de acesso
                                </Title3>
                            </Flex>
                            <Input
                                id="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Insira seu email cadastrado"
                                label="Para recuperar seu acesso, informe o e-mail cadastrado."
                                Icon={User}
                                assistentText='Você receberá neste e-mail um link para cadastrar uma nova senha de acesso.'
                            />
                        </Flex>
                        <Flex column margin="16px">
                            <Button tertiary fullWidth>
                                Não possuo cadastro
                            </Button>
                            <Button
                                fullWidth
                                onClick={() => {
                                    handleSendPasswordRecoveryEmail()
                                }}
                            >
                                Recuperar acesso
                            </Button>
                        </Flex>
                    </Card>
                </Flex>
            </Background>
        )
    } else {
        return (
            <Background>
                <Flex
                    width='100%'
                
                >
                    <Card login width='489px'>
                        <Flex width='100%'>
                        <Logo src="/images/Logo.png" alt="Logo" />
    
                        </Flex>
                        <Flex padding="0 16px 16px" column alignItems="flex-start">
                            <Input
                                id="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Insira seu email cadastrado"
                                label="Usuário"
                                Icon={User}
                                error={loginError}
                            />
                            {viewPassword ? (
                                <Input
                                    id="password"
                                    type="text"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Insira sua senha"
                                    label="Senha"
                                    Icon={Eye}
                                    iconIsButton
                                    onIconButtonClick={() => setViewPassword(false)}
                                    error={loginError}
                                    assistentText={loginErrorMessage}
                                />
                            ) : (
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Insira sua senha"
                                    label="Senha"
                                    Icon={EyeClosed}
                                    iconIsButton
                                    onIconButtonClick={() => setViewPassword(true)}
                                    error={loginError}
                                    assistentText={loginErrorMessage}
                                />
                            )}
                            <Button
                                tertiary
                                fontSize="14px"
                                onClick={() => setForgotPassword(true)}
                            >
                                Esqueci minha senha
                </Button>
                        </Flex>
                        <Flex column margin="16px">
                            <Button tertiary fullWidth>
                                Não possuo cadastro
                </Button>
                            <Button
                                fullWidth
                                onClick={() => handleLogin()}
                            >
                                Acessar
                </Button>
                        </Flex>
                    </Card>
                </Flex>
            </Background>
        );
    }
};

export default LoginPage
