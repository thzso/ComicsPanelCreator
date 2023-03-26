export default function CharacterCard({
  filterColorClass,
  nameOfChar,
  isReady,
  contentOfBubble,
}) {
  return (
    <>
      <div
        className={
          isReady
            ? "container--CharacterCard_main characterCard_clicked"
            : "container--CharacterCard_main"
        }
      >
        <p
          id={
            isReady
              ? "p--characterCard_clicked-id"
              : "p--characterCard_default-id"
          }
        >
          <em>{nameOfChar}</em>
        </p>
        {isReady && contentOfBubble !== "" && (
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
            className={filterColorClass}
            id={isReady ? "img--characterCard_clicked-id" : ""}
            src={`images/${nameOfChar}.png`}
          />
        ) : (
          <div id="placeholderdiv"></div>
        )}
      </div>
    </>
  );
}
