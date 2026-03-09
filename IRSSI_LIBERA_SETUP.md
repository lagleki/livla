# Connecting to Libera.Chat with irssi

This guide explains how to connect to Libera.Chat (irc.libera.chat) using irssi with SASL authentication, which is often required for modern IRC networks.

## Prerequisites

1. Install irssi if you haven't already:
   ```bash
   sudo apt-get install irssi  # Debian/Ubuntu
   # or
   sudo yum install irssi      # RHEL/CentOS
   # or
   brew install irssi          # macOS
   ```

2. Start irssi:
   ```bash
   irssi
   ```

## Step 1: Register Your Nick with NickServ

First, connect to Libera.Chat and register your nickname:

```
/connect irc.libera.chat
```

Once connected, register your nickname (if you haven't already):
```
/msg NickServ REGISTER your_password your_email@example.com
```

Check your email and follow the verification instructions to complete registration.

## Step 2: Configure Network and Server

In irssi, set up the LiberaChat network:

```
/network add LiberaChat
/server add -net LiberaChat -tls irc.libera.chat 6697
```

This creates a network called "LiberaChat" and adds the server with TLS encryption on port 6697.

## Step 3: Configure SASL Authentication

Set your SASL username (your nickname) and password:

```
/sasl set LiberaChat your_nickname your_password
```

Replace:
- `your_nickname` with your registered IRC nickname
- `your_password` with your NickServ password

## Step 4: Connect

Now connect to the network:

```
/connect LiberaChat
```

Or simply:
```
/connect irc.libera.chat
```

## Step 5: Join #lojban

Once connected and authenticated, join the channel:

```
/join #lojban
```

## Alternative: Quick Connect (Without SASL)

If you prefer to identify manually after connecting:

```
/connect irc.libera.chat
/msg NickServ IDENTIFY your_password
/join #lojban
```

## Auto-Connect Configuration

To automatically connect on irssi startup, you can configure it in your `~/.irssi/config` file. Add:

```
servers = (
  {
    address = "irc.libera.chat";
    chatnet = "LiberaChat";
    port = "6697";
    use_ssl = "yes";
    ssl_verify = "yes";
    autoconnect = "yes";
  }
);

chatnets = {
  LiberaChat = {
    type = "IRC";
    nick = "your_nickname";
    sasl_username = "your_nickname";
    sasl_password = "your_password";
    sasl_mechanism = "PLAIN";
  };
};
```

## Useful Commands

- `/help` - Show help
- `/list` - List available channels
- `/whois nickname` - Get info about a user
- `/nick newnick` - Change nickname
- `/quit` - Disconnect and exit
- `/window 1` - Switch to window 1
- `/window list` - List all windows

## Troubleshooting

### SASL Authentication Fails

If SASL authentication doesn't work:
1. Verify your nickname and password are correct
2. Make sure your nickname is registered with NickServ
3. Try identifying manually: `/msg NickServ IDENTIFY your_password`

### Connection Issues

- Ensure port 6697 is not blocked by firewall
- Try connecting without TLS first: `/server add -net LiberaChat irc.libera.chat 6667`
- Check if you need to use a different port or proxy

## Notes

- Libera.Chat requires SASL authentication for many operations
- Always use TLS/SSL (port 6697) for secure connections
- Your SASL username is typically your IRC nickname
- Keep your NickServ password secure


