import TasksPage from "@/app/tasks/page";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

describe("Tasks Page", () => {
  const user = userEvent.setup();
  render(<TasksPage />);

  test("check don't have tasks", () => {
    const noResults = screen.getByText("No tasks yet");
    expect(noResults).toBeDefined();
  });

  test("Click to open the modal", async () => {
    const buttonNewTask = screen.getByText("New Task");
    expect(buttonNewTask).toBeDefined();
    await user.click(buttonNewTask!);

    const modal = screen.getByRole("dialog");
    expect(modal).toBeDefined();
  });

  test("Click to close the modal", async () => {
    const buttonClose = screen.getByText("X");
    expect(buttonClose).toBeDefined();
    await user.click(buttonClose!);
    const modal = screen.queryByRole("dialog");
    expect(modal?.className).toEqual("hidden");
  });

  test("Click to create a new task", async () => {
    const buttonNewTask = screen.getByText("New Task");
    expect(buttonNewTask).toBeDefined();
    await user.click(buttonNewTask!);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    await user.type(input, "test");
    await user.click(button!);

    const modal = screen.queryByRole("dialog");
    expect(modal?.className).toEqual("hidden");
  });

  test("Click to create a new task and check if it input is empty", async () => {
    const buttonNewTask = screen.getByText("New Task");
    expect(buttonNewTask).toBeDefined();
    await user.click(buttonNewTask!);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    await user.click(button!);

    const toast = screen.getByRole("alert");
    expect(toast).toBeDefined();

    const buttonClose = toast.querySelector("button");
    expect(buttonClose).toBeDefined();
    expect(buttonClose?.getAttribute("aria-label")).toEqual("Close");

    await user.click(buttonClose!);
  });

  test("check list of tasks", async () => {
    const listTasks = screen.getByRole("list");
    expect(listTasks).toBeDefined();

    const tasks = listTasks.querySelectorAll("li");
    expect(tasks.length).toEqual(1);

    const task = tasks[0];
    expect(task).toBeDefined();
    expect(task.textContent).toEqual("test");
  });
});
