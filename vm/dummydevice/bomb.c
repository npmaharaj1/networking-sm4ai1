#include <stdio.h>
#include <string.h>
#include <unistd.h>

#define DD_DEFAULT_LINE_WRITE_INTERVAL (10000)

static void writeLineInterval(const char* str, useconds_t interval) {
    // note: char literals are of type int for some reason
    int c;
    while ((c = *str) != '\0') {
        putchar(c);
        fflush(stdout);
        str++;
        usleep(interval);
    }
}

static void writeLine(const char* str) {
    writeLineInterval(str, DD_DEFAULT_LINE_WRITE_INTERVAL);
}

static void startAgain(void) {
	sleep(2);
    writeLine("\n- INCORRECT PASSWORD ENTERED -\n");
    sleep(1);
    writeLine("- DATA DELETION IN -\n");
    sleep(1);
    printf("3...\n");
    sleep(1);
    printf("2..\n");
    sleep(1);
    printf("1.\n");
    sleep(5);

    writeLineInterval("Game Over...", 10000);
    sleep(3);
    writeLine(" (You may start again from the beginning.)\n");

    sleep(3);
    printf("Shifting details...\n");
    usleep(500000);
    // Kill the process here and make players start from beginning of ctf
}

static void reroutePlayer(void) {
    writeLineInterval("\n...\n...\n", 500000);
    sleep(2);
    writeLineInterval("well...\n", 500000);
    sleep(3);

    writeLine("It looks like you've.. 'defused' this successfully.\n");
    sleep(3);
    writeLine("It's a shame really...\n");
    sleep(2);
    writeLine("I hate to break it to you, but this isn't the real bomb.\n");
    sleep(3);
    writeLine(
        "Sending you on this goose chase provided me with great information about you and your "
        "'team'.\n"
    );
    sleep(3);
    writeLine("It's a shame really, I was thinking about postponing the deletion..\n");
    sleep(3);
    writeLineInterval("...", 500000);
    writeLine("but I think I'll do it anyway.\n");
    sleep(3);
    writeLineInterval("Stop me - ", 50000);
    sleep(1);
    writeLineInterval("if you can.\n", 200000);
    sleep(4);

    printf("\nConnection closed by peer: 192.168.1.{insert ip}\n");
    printf("-RECORDING STOPPED-\n");
}

int main(int argc, char** argv) {
    char* key = "The tears of a clown make my lipstick run, but my shower cap is still intact.";
    writeLine("\n");

    writeLineInterval(
        ":::::::::   ::::::::  ::::    ::::  :::::::::       :::::::: \n"
        ":+:    :+: :+:    :+: +:+:+: :+:+:+ :+:    :+:     :+:    :+:\n"
        "+:+    +:+ +:+    +:+ +:+ +:+:+ +:+ +:+    +:+     +:+       \n"
        "+#++:++#+  +#+    +:+ +#+  +:+  +#+ +#++:++#+      +#+       \n"
        "+#+    +#+ +#+    +#+ +#+       +#+ +#+    +#+     +#+       \n"
        "#+#    #+# #+#    #+# #+#       #+# #+#    #+# #+# #+#    #+#\n"
        "#########   ########  ###       ### #########  ###  ######## \n\n\n",
        2500
    );

    sleep(3);

    writeLine("Hello defender, it looks like you have found me.\n");
    sleep(2);
    writeLine(
        "What you are looking at right now (this file) is the bomb responsible for mass data "
        "deletion.\n"
    );

    char name[101] =
        "The tears of a clown make my lipstick run, but my shower cap is still intact.\n";

    sleep(2);
    writeLine(
        "If you fail to defuse this, you will be held responsible for everyone's data loss.\n"
    );
    sleep(2);
    writeLine("Enter the correct defuse instruction, and you win - easy right?\n");

    sleep(3);
    writeLine("\nEnter the password, at your own risk: ");

    char answer[101];
    fgets(answer, 100, stdin);

    if (!strcmp(name, answer)) {
        reroutePlayer();
    } else {
        startAgain();
    }

    return 0;
}
