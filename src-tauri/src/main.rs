#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, Submenu};

fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "閉じる");
  let close = CustomMenuItem::new("logout".to_string(), "ログアウト");
  let submenu = Submenu::new("設定", Menu::new().add_item(quit).add_item(close));
  let menu = Menu::new()
    .add_item(CustomMenuItem::new("hide", "Hide"))
    .add_submenu(submenu);
  tauri::Builder::default()
    .menu(menu)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
