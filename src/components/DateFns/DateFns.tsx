/* eslint-disable import/no-duplicates */
import { format, Locale } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { enUS, ptBR } from "date-fns/locale";

export const DateFns = (): JSX.Element => {
  const currentDate = new Date();

  function parseDateToTimezoneAndFormat(date: Date, timezone: string, locale: Locale) {
    return format(utcToZonedTime(date, timezone), "EEEE", { locale });
  }

  const currentDateAtUS = parseDateToTimezoneAndFormat(currentDate, "America/New_York", enUS);
  const currentDateAtBR = parseDateToTimezoneAndFormat(currentDate, "America/Sao_Paulo", ptBR);

  return (
    <div>
      <h1>currentDateAtUS: {currentDateAtUS}</h1>
      <h1>currentDateAtBR: {currentDateAtBR}</h1>
    </div>
  );
};
