import {
  fireEvent,
} from "@testing-library/react";
import { render, screen, userEvent } from "../../utils/test-utils";
import { Provider } from "react-redux";
import { store } from "../../store";
import Login from ".";
import { describe, expect, it } from "vitest";

describe("login tests", () => {
  it("login is successful", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const email = screen.getByLabelText<HTMLInputElement>("email");
    fireEvent.change(email, {
      target: { value: "phemmynesce4life@gmail.com" },
    });
    const password = screen.getByLabelText<HTMLInputElement>("password");
    fireEvent.change(password, {
      target: { value: "test1234" },
    });

    userEvent.click(screen.getByText("LOG IN"));
    expect(email.value).toBe("");
    expect(password.value).toBe("");
  });
//   it("used a wrong email", () => {});
//   it("used a short password", () => {});
});
