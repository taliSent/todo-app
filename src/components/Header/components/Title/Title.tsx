import useTitleLogic from "@/hooks/useTitleLogic";
import "@/scss/components/_title.scss";

const TITLE = "T O D O";
//TODO: fix this
const Title = () => {
  const { imgAdress, handleToggleTheme } = useTitleLogic();
  return (
    <h1 className='title' data-testid='title'>
      <div>{TITLE}</div>
      <img
        src={imgAdress}
        alt='button to toggle theme'
        className='toggle-theme-icon'
        onClick={handleToggleTheme}
        data-testid='toggle-theme'
      />
    </h1>
  );
};
export default Title;
