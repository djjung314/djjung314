import { type FormEvent, useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  CATEGORIES,
  DOW_KO,
  MONTH_EN,
  type CalendarEvent,
  type Category,
} from "@/lib/calendar/types";
import { toISO } from "@/lib/calendar/date";

type Props = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  date: Date;
  onSubmit: (event: Omit<CalendarEvent, "id">) => void;
};

type EventFormState = {
  time: string;
  title: string;
  note: string;
  category: Category;
};

const DEFAULT_EVENT_FORM: EventFormState = {
  time: "09:00",
  title: "",
  note: "",
  category: "기록",
};

export function EventDialog({ open, onOpenChange, date, onSubmit }: Props) {
  const [form, setForm] = useState<EventFormState>(DEFAULT_EVENT_FORM);

  const selectedDateLabel = useMemo(
    () =>
      `${MONTH_EN[date.getMonth()]} ${date.getDate()} · ${DOW_KO[date.getDay()]}요일`,
    [date],
  );

  const title = form.title.trim();
  const note = form.note.trim();
  const canSubmit = title.length > 0 && form.time.length > 0;

  useEffect(() => {
    if (!open) {
      setForm(DEFAULT_EVENT_FORM);
    }
  }, [open]);

  const updateForm = <K extends keyof EventFormState>(
    key: K,
    value: EventFormState[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) return;

    onSubmit({
      date: toISO(date),
      time: form.time,
      title,
      note: note || undefined,
      category: form.category,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm bg-card border-ink/10">
        <DialogHeader>
          <DialogTitle className="font-serif italic text-2xl">새로운 순간</DialogTitle>
          <DialogDescription className="text-dim text-xs tracking-widest uppercase">
            {selectedDateLabel}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="time" className="text-[10px] uppercase tracking-[0.2em] text-dim">
                시각
              </Label>
              <Input
                id="time"
                type="time"
                value={form.time}
                onChange={(event) => updateForm("time", event.target.value)}
                className="bg-transparent"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cat" className="text-[10px] uppercase tracking-[0.2em] text-dim">
                결
              </Label>
              <select
                id="cat"
                value={form.category}
                onChange={(event) => updateForm("category", event.target.value as Category)}
                className="w-full h-9 rounded-md bg-transparent border border-input px-3 text-sm"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category} className="bg-card text-ink">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="title" className="text-[10px] uppercase tracking-[0.2em] text-dim">
              제목
            </Label>
            <Input
              id="title"
              value={form.title}
              onChange={(event) => updateForm("title", event.target.value)}
              placeholder="아침의 산책"
              autoFocus
              className="bg-transparent"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="note" className="text-[10px] uppercase tracking-[0.2em] text-dim">
              기록
            </Label>
            <Textarea
              id="note"
              value={form.note}
              onChange={(event) => updateForm("note", event.target.value)}
              placeholder="이 순간에 남길 한 줄"
              rows={3}
              className="bg-transparent resize-none"
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-dim"
            >
              취소
            </Button>
            <Button type="submit" disabled={!canSubmit}>
              새기기
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EventDialog;
