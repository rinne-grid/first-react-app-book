import { ResultPropsType } from '../types/ResultPropsType';

const Result = (props: ResultPropsType) => {
  return (
    <>
      {props.result.message_text && (
        <>
          <span>{props.result.message_text}</span>
        </>
      )}
      {props.result.name && (
        <h1>
          <u>{props.result.name}</u>の天気
        </h1>
      )}

      {props.result.condition_icon && (
        <>
          <img
            src={props.result.condition_icon}
            alt={props.result.condition_text}
          />
          <span>{props.result.condition_text}</span>
          <br />
        </>
      )}
      {props.result.temp_c && (
        <>
          <span>気温</span>
          <div>{props.result.temp_c}℃</div>
        </>
      )}
    </>
  );
};
export default Result;
