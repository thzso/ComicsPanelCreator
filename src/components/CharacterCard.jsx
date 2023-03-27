export default function CharacterCard({
  filterColorClass,
  nameOfChar,
  isReady,
  contentOfBubble,
  charBckgrUrl,
}) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${charBckgrUrl})` }}
        // className={`${filterColorClass} ${
        //   isReady
        //     ? "container--CharacterCard_main characterCard_clicked"
        //     : "container--CharacterCard_main"
        // }`}
        className={
          isReady
            ? "container--CharacterCard_main characterCard_clicked"
            : "container--CharacterCard_main"
        }
      >
        {/* <p
          id={
            isReady
              ? "p--characterCard_clicked-id"
              : "p--characterCard_default-id"
          }
        >
          <em>{nameOfChar}</em>
        </p> */}
        <div className={`${filterColorClass} color-background-char-card`}>
          <p id="p--characterCard_clicked-id">
            <em>{nameOfChar}</em>
          </p>
          {/* {isReady && contentOfBubble !== "" && ( */}
          {contentOfBubble !== "" && (
            <>
              <div id="bubble-container">
                <div className="bubble bubble-bottom-left">
                  <em>{contentOfBubble}</em>
                </div>
              </div>
            </>
          )}

          {nameOfChar !== "" ? (
            <img
              id={isReady ? "img--characterCard_clicked-id" : ""}
              src={`images/${nameOfChar}.png`}
            />
          ) : (
            <div id="placeholderdiv"></div>
          )}
        </div>
      </div>
    </>
  );
}
