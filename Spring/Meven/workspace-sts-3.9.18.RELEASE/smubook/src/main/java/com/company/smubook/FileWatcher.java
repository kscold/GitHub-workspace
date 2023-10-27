package com.company.smubook;

import com.company.smubook.services.UserService;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;

// 파일 변화를 감지할 수 있는 기능 선언
public class FileWatcher implements Runnable {
	private String jsonFilePath;
	private UserService userService;

	public FileWatcher(String jsonFilePath, UserService userService) {
		this.jsonFilePath = jsonFilePath;
		this.userService = userService;
	}

	public void run() {
		Path jsonDirectory = Path.of(jsonFilePath).getParent();

		try {
			WatchService watchService = FileSystems.getDefault().newWatchService();
			jsonDirectory.register(watchService, StandardWatchEventKinds.ENTRY_MODIFY);

			while (true) {
				WatchKey key = watchService.take();

				for (WatchEvent<?> event : key.pollEvents()) {
					Path changedFile = (Path) event.context();
					if (changedFile.toString().equals("users.json")) {
						System.out.println("users.json 파일이 변경되었습니다.");

						userService.handleFileChange();
					}
				}

				boolean valid = key.reset();
				if (!valid) {
					break;
				}
			}
		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
	}
}
