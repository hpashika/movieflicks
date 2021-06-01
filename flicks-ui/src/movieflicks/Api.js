export const app_host_port = () => {
  console.log(process.env);
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000';
  } else {
    return '';
  }
};

export default app_host_port;
