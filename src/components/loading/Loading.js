import * as classes from './loading.module.css';

function Loading() {
  return (
    <div className={classes['lds-ring']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export { Loading };
